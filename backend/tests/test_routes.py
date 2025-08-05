import pytest
from app import app, db
from models import Comment

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.app_context():
        db.drop_all()
        db.create_all()
    client = app.test_client()
    yield client

def test_add_comment(client):
    res = client.post('/comments', json={'task_id': 1, 'content': 'Test comment'})
    assert res.status_code == 201
    assert b'Comment added' in res.data

def test_update_comment(client):
    client.post('/comments', json={'task_id': 1, 'content': 'Old content'})
    res = client.put('/comments/1', json={'content': 'New content'})
    assert b'Comment updated' in res.data

def test_delete_comment(client):
    client.post('/comments', json={'task_id': 1, 'content': 'To be deleted'})
    res = client.delete('/comments/1')
    assert b'Comment deleted' in res.data