import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllLeaderboard } from '../states/leaderboard/action';

function Leaderboard() {
  const dispatch = useDispatch();
  const leaderboards = useSelector((state) => state.leaderboard.leaderboards);

  useEffect(() => {
    dispatch(asyncGetAllLeaderboard());
  }, []);

  return (
    <div className="py-10 px-6 w-full md:w-5/6 lg:w-4/6 mx-auto">
      <h1 className="text-2xl mb-8">Leaderboard User Aktif</h1>

      <div className="flex justify-between items-center mb-4">
        <p className="font-bold text-lg">User</p>
        <p className="font-bold text-lg">Skor</p>
      </div>
      {leaderboards.map((rank) => (
        <div key={rank.user?.id}>
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={rank.user?.avatar || ''} alt="profile" width="30px" height="30px" className="mr-2" />
              <p>{rank.user?.name}</p>
            </div>
            <p>{rank.score}</p>
          </div>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default Leaderboard;
