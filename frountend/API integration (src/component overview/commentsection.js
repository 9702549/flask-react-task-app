 import React, { useEffect, useState } from 'react';
import { fetchComments, addComment, deleteComment } from '../api';

function CommentSection({ taskId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const loadComments = async () => {
    const res = await fetchComments(taskId);
    setComments(res.data);
  };

  useEffect(() => {
    loadComments();
  }, [taskId]);

  const handleAdd = async () => {
    if (text.trim()) {
      await addComment(taskId, { content: text });
      setText('');
      loadComments();
    }
  };

  const handleDelete = async (commentId) => {
    await deleteComment(taskId, commentId);
    loadComments();
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add comment" />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            {c.content}
            <button onClick={() => handleDelete(c.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;