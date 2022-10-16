import React, {useEffect} from 'react';
import { TopC } from '../containers';
import { img1, img2, img3 } from './imports';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions/action';




const TopCharts = () => {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchData())},[])
    let musics = useSelector((state) =>state.music);
  return (
    <>
        <div>
            <div className='flex-1 flex flex-col gap-[20px] mt-[30px]'>
                <div>
                  <h1 className='text-white text-[25px] font-bold'>Top charts</h1>
                </div>
                {musics?.length > 0 ? (musics.slice(0,3).map((music, index)=>(
                  <TopC imgUrl={ music.images.coverart } title={music.title} artist={music.subtitle} duration={'2:40'} index={index} key={music.title+index}/>
                ))):null};
            </div>
        </div>
    </>
  )
}

export default TopCharts