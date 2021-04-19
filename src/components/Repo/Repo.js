import "./Repo.css";

function Repo({data}) {
    const repo = data;
    const image_url = repo.owner.avatar_url;
    const date = new Date(repo.pushed_at)
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
                    <label>Issues: {repo.open_issues}</label>
                    <p>submitted {date.toDateString()}  by {repo.owner.login}</p>
                </div>
            </div>
        </div>
    )
}

export default Repo;