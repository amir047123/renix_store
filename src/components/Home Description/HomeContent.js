import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../shared/Loading';

const HomeContent = () => {
    // State to hold the fetched data and loading state
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch data
    const fetchHomeContent = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/homeContents/getHomeContents');
            setContents(response.data.data); // Assuming response.data is an array of content items
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading state to false regardless of success or failure
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchHomeContent();
    }, []);
    console.log("home contnent",HomeContent)

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="">
            <div className='px-10 py-5'>
                {contents.map((content, index) => (
                    <div key={index}>
                        <h2 className='text-2xl font-bold'>{content.title}</h2>
                        <p className='text-justify py-2' dangerouslySetInnerHTML={{ __html: content?.description }}></p>
                        {/* Render other content properties as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeContent;
