 from flask import Blueprint, request, jsonify
from models import db, Comment

comment_bp = Blueprint('comment_bp', __name__)

@comment_bp.route('/comments', methods=['POST'])
def add_comment():
    data = request.json
    comment = Comment(task_id=data['task_id'], content=data['content'])
    db.session.add(comment)
    db.session.commit()
    return jsonify({'message': 'Comment added', 'id': comment.id}), 201

@comment_bp.route('/comments/<int:id>', methods=['PUT'])
def update_comment(id):
    data = request.json
    comment = Comment.query.get_or_404(id)
    comment.content = data['content']
    db.session.commit()
    return jsonify({'message': 'Comment updated'})

@comment_bp.route('/comments/<int:id>', methods=['DELETE'])
def delete_comment(id):
    comment = Comment.query.get_or_404(id)
    db.session.delete(comment)
    db.session.commit()
    return jsonify({'message': 'Comment deleted'})