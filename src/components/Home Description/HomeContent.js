import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Shared/Loading';

const HomeContent = () => {
    // State to hold the fetched data and loading state
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Function to fetch data
    const fetchHomeContent = async () => {
        try {
            const response = await axios.get('https://apistore.renixlaboratories.com.bd/api/v1/homeContents/getHomeContents');
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

    if (loading) {
        return <Loading />;
    }

    return (
      <div className="container">
        <div className=" pb-5 pt-8">
          {contents.map((content, index) => (
            <div key={index}>
              <h1 className="text-2xl font-bold">{content.title}</h1>
              <p
                className="text-justify py-2"
                dangerouslySetInnerHTML={{ __html: content?.description }}
              ></p>
              {/* Render other content properties as needed */}
            </div>
          ))}
        </div>
      </div>
    );
};

export default HomeContent;
