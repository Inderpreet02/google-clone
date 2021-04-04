import { Avatar } from '@material-ui/core'
import AppsIcon from '@material-ui/icons/Apps';
import React from 'react'
import Search from './Search'
import SearchOption from './SearchOption';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./SearchPage.css"
import { useSelector } from 'react-redux';
import { selectTerm } from '../features/appSlice';
import useFetchData from './useFetchData';
import response from './response';

function SearchPage() {

    const term = useSelector(selectTerm);

    const { data } = useFetchData(term);

    // const data = response;

    console.log(data);
    return (
        <div className="searchpage">

            <div className="searchpage__header">
                <div className="searchpage__headerTop">
                    <div className="searchpage__headerTopL">
                        <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt=""/>
                        <Search/>
                    </div>

                    <div className="searchpage__headerTopR">
                        <span>
                            <AppsIcon/>
                        </span>
                        <Avatar src="https://media.altchar.com/prod/images/940_530/gm-db676e64-95ff-47e7-9e0b-3799e75f86f1-gaben.jpeg"/>
                    </div>
                </div>

                <div className="searchpage__headerBot">
                    <SearchOption Icon={SearchIcon} text="All"/>
                    <SearchOption Icon={DescriptionIcon} text="News"/>
                    <SearchOption Icon={CropOriginalIcon} text="Images"/>
                    <SearchOption Icon={LocalOfferIcon} text="Shopping"/>
                    <SearchOption Icon={PlayCircleOutlineIcon} text="Vedioes"/>
                    <SearchOption Icon={MoreVertIcon} text="More"/>
                    <SearchOption text="Settings"/>
                    <SearchOption text="Tools"/>

                </div>
            </div>
            
            <div className="searchpage__body">
                {term && (
                    <div className="searchpage__result">
                        <p className="searchpage__resultCount">
                            About {data?.searchInformation.formattedTotalResults} result ({data?.searchInformation.formattedSearchTime} seconds)
                        </p>

                        {data?.items.map(item => (
                            <div className="search__result">
                                <a href={item.link}>
                                    {item.displayLink}
                                </a>
                                <div className="search__resultTitle">
                                    <a href={item.link}>
                                        <h2>{item.title}</h2>
                                    </a>
                                </div>
                                <div className="search__resultDesc">
                                    <p>{item.snippet}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}  
            </div>
        </div>
    )
}

export default SearchPage
