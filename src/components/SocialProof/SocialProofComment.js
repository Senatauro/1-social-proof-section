import "./SocialProofComment.css"

export default function SocialProofComment(props) {
    return (
        <div className={"social-proof-comment margin-top-" + props.margin}>
            <div className="social-proof-comment-avatar">
                <img src={props.avatar} alt="avatar" />
                <div className="social-proof-comment-user">
                    <p className="social-proof-comment-user-name">{props.name}</p>
                    <p className="social-proof-comment-user-subtitle">Verified Buyer</p>
                </div>
            </div>
            <p className="social-proof-comment-desc">
                "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
            </p>
        </div>
    )
}