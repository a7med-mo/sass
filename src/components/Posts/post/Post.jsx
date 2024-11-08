import { formatDistanceToNow } from 'date-fns';
// eslint-disable-next-line react/prop-types
export default function Post({ url, title, discription, data }) {
    return (
        <>
            <div className="post">
                <div className="filter"></div>
                <div className="box-img">
                    <img src={url} alt={title} />
                </div>
                <div className="box-text">
                    <p className='data'>
                        {data
                            ? `Posted ${formatDistanceToNow(data, { addSuffix: true })}`
                            : "Date not available"
                        }
                    </p>
                    <h3>{title}</h3>
                    <p>{discription}</p>
                </div>
            </div>
        </>
    )
}
