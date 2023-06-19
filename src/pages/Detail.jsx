/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { asyncGetDetailThread, asyncPostCommentThread } from '../states/thread/action';
import BodyThread from '../components/BodyThread';
import { JWT_TOKEN_KEY } from '../utils/constants';
import useInput from '../hooks/useInput';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const thread = useSelector((state) => state.thread.detailThread) || {};
  const user = useSelector((state) => state.authUser);
  const [content, onChangeContent, setContent] = useInput('');

  const onSubmitComment = () => {
    dispatch(asyncPostCommentThread({ threadId: id, content }));
    setContent('');
  };

  useEffect(() => {
    dispatch(asyncGetDetailThread(id));
  }, []);

  return (
    <div className="p-8">
      <header className="border-b-2 pb-4 mb-4">
        <h1 className="font-bold text-2xl mb-4">{thread.title}</h1>
        <div className="flex gap-2">
          <img src={thread.owner?.avatar || ''} alt="profile" width="16px" height="16px" />
          <p className="text-sm border-r-2 pr-2">
            <strong>{thread.owner?.name || ''}</strong>
            {' '}
            dibuat pada
            {' '}
            <span>{thread.createdAt && format(new Date(thread.createdAt), 'dd LLL yyyy')}</span>
          </p>
          {thread.comments && (
          <p className={`text-sm font-bold ${thread.comments.length > 0 ? 'text-green-600' : ''}`}>
            {`${thread.comments.length} comment`}
          </p>
          )}
        </div>
      </header>
      <BodyThread text={thread.body} />
      <hr className="my-4" />
      <p className="font-bold text-lg mb-2">
        Beri Komentar
      </p>
      {(localStorage.getItem(JWT_TOKEN_KEY) && user?.id) ? (
        <>
          <textarea name="comment" rows="4" cols="50" className="border-2 w-full" value={content} onChange={onChangeContent} />
          <button
            type="submit"
            className="border rounded-md bg-blue-900 text-white text-sm font-bold px-4 py-1 w-full"
            onClick={onSubmitComment}
          >
            Kirim
          </button>
        </>
      )
        : (
          <p>
            <Link to="/login" className="text-blue-500 underline mr-1">Login</Link>
            <span>untuk memberi komentar</span>
          </p>
        )}
      <hr className="my-4" />
      <p className="font-bold text-lg mb-4">
        {`${!!thread.comments && thread.comments.length} Komentar`}
      </p>
      {(thread.comments || []).map((comment) => (
        <div key={comment.id} className="py-4 border-b-2">
          <header className="flex gap-2 mb-2">
            <img src={comment.owner?.avatar || ''} alt="profile" width="16px" height="16px" />
            <p className="text-sm pr-2">
              <strong>{comment.owner?.name || ''}</strong>
            </p>
          </header>
          <BodyThread text={comment.content} />
          <footer className="flex gap-4 my-2 text-gray-600">
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              <p className="text-sm font-bold">
                {`${thread.upVotesBy ? thread.upVotesBy.length : 0}`}
              </p>
            </div>
            <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
              </svg>
              <p className="text-sm font-bold">
                {`${thread.downVotesBy ? thread.downVotesBy.length : 0}`}
              </p>
            </div>
            <p className="text-sm border-l-2 pl-4">
              {thread.createdAt && format(new Date(thread.createdAt), 'dd LLL yyyy')}
            </p>
          </footer>
        </div>
      ))}
    </div>
  );
}

export default Detail;
