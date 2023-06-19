/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { asyncGetAllThread } from '../states/thread/action';
import { asyncGetAllUser } from '../states/users/action';
import BodyThread from '../components/BodyThread';
import Fab from '../components/Fab';

function Home() {
  const threads = useSelector((state) => state.thread.threads);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const authorDetail = (id) => {
    const selectedUser = (users || []).find((user) => user.id === id);
    return selectedUser;
  };

  useEffect(() => {
    dispatch(asyncGetAllThread());
    dispatch(asyncGetAllUser());
  }, [dispatch]);

  return (
    <div className="p-6 relative h-full">
      {(threads || []).map((thread) => (
        <div className="py-4 border-b-2" key={thread.id}>
          <div className="">

            <h2 className="font-bold text-lg hover:text-blue-900 w-fit">
              <Link to={`/thread/${thread.id}`}>
                {thread.title}
              </Link>
            </h2>
            <BodyThread text={thread.body} isCutText />
            <div className="w-fit py-0.5 px-2 border rounded-lg bg-blue-200 my-2">
              <p className="text-blue-950 text-sm">{thread.category}</p>
            </div>

            <footer className="flex gap-2">
              <img src={authorDetail(thread.ownerId)?.avatar || ''} alt="profile" width="16px" height="16px" />
              <p className="text-sm border-r-2 pr-2">
                <strong>{authorDetail(thread.ownerId)?.name || ''}</strong>
                {' '}
                dibuat pada
                {' '}
                <span>{format(new Date(thread.createdAt), 'dd LLL yyyy')}</span>
              </p>
              <p className={`text-sm font-bold ${thread.totalComments > 0 ? 'text-green-600' : ''}`}>
                {`${thread.totalComments} comment`}
              </p>
              <p className="text-sm font-bold">
                {`${thread.downVotesBy.length + thread.upVotesBy.length} votes`}
              </p>
            </footer>
          </div>
        </div>
      ))}
      <Link to="/ask-question">
        <Fab />
      </Link>
    </div>
  );
}

export default Home;
