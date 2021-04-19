import "./Repo.css";

function Repo({data}) {
    const repo = data;
    const image_url = repo.owner.avatar_url;
    const pushedDate = repo.pushed_at
    return (
        <div className="repo-con">
            {image_url?<img alt="Profile Avatar" className="avatar" src={image_url}/>:<div className="repo-image-con"></div>}
            <div className="repo-text-con">
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
                <div className="labels-con">
                    <label>
                        <i className="far fa-star" style={{color:"yellow"}}></i>{repo.stargazers_count}
                    </label>
                    <label>Issues: {data.open_issues}</label>
                    <p>submitted 30days ago by {data.owner.login}</p>
                </div>
            </div>
        </div>
    )
}

export default Repo;