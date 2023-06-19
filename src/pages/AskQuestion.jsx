import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

import { asyncPostNewThread } from '../states/thread/action';

function AskQuestion() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, onChangeTitle] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [body, onChangeBody] = useInput('');

  const onSubmitQuestion = () => {
    dispatch(asyncPostNewThread({ title, body, category })).then(() => {
      navigate('/');
    }).catch(() => {});
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Buat Diskusi</h1>
      <div>
        <label htmlFor="title">
          Judul
          <input
            id="title"
            className="border-2 w-full mb-4"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
        </label>
        <label htmlFor="category">
          Kategori
          <input
            id="category"
            className="border-2 w-full mb-4"
            type="text"
            value={category}
            onChange={onChangeCategory}
          />
        </label>
        <label htmlFor="body">
          Konten
          <textarea
            name="comment"
            rows="6"
            cols="50"
            className="border-2 w-full"
            value={body}
            onChange={onChangeBody}
          />
        </label>

        <button
          type="submit"
          className="mt-4 border rounded-md bg-blue-900 text-white text-sm font-bold px-4 py-1 w-full"
          onClick={onSubmitQuestion}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AskQuestion;
