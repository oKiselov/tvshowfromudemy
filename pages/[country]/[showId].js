import axios from 'axios';
import parse from 'html-react-parser';
import Cast from '../../components/Cast';
import Header from '../../components/Header';

const ShowDetails = ({show}) => {

    const { name, image, summary, _embedded} = show;

    if (show == undefined){
        return <div></div>;
    }
    
    return (
        <div className="show-details">
            <Header/>
            <div 
                className="show-details__poster" 
                style={{ backgroundImage: `url(${image.original})` }}>
                </div>
            <h1>{name}</h1>
            { parse(summary) }

            {_embedded.cast.length > 0 && <Cast 
                cast={_embedded.cast}
            />}

            <style jsx>{`
                .show-details__poster {
                    height: 200px;
                    background-size: cover;
                }
            `}</style>
        </div>
    )
}

export default ShowDetails;

 /*
 ShowDetails.getInitialProps = async({query}) => {
     const {showId} = query;

     console.log(query);
     const response = await axios.get(`https://api.tvmaze.com/shows/${showId}?embed=cast`);
     return {
         show: response.data
     }
 } 
  */


 export async function getStaticPaths() {
    let paths = [
        {
            params: { 
                country: 'br',
                showId: '10820'
            }
        },
        {
            params: { 
                country: 'br',
                showId: '2873'
            }
        },
        {
            params: { 
                country: 'ua',
                showId: '5221'
            }
        }
    ];
    return {paths, fallback: false}; 
}

 export async function getStaticProps({params}) {
        const {showId} = params;
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}?embed=cast`);
    
        return { props: {
                show: response.data
            }
        }
     } 

