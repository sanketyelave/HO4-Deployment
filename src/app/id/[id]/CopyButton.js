import React from "react"

export const TwitterShareButton = () => {
    const textToShare = "Check out this awesome content!"
    const urlToShare = "https://example.com"
    const hashtags = "Example,React"

    const handleTwitterShareClick = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            textToShare
        )}&url=${encodeURIComponent(urlToShare)}&hashtags=${encodeURIComponent(
            hashtags
        )}`
        window.open(twitterUrl, "_blank")
    }

    return <button onClick={handleTwitterShareClick}>Share on X</button>
}

export const LinkedInShareButton = ({url}) => {

    const handleLinkedInShareClick = () => {
        const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}}`;
        window.open(linkedinUrl, '_blank');
    };

    return (
        <button onClick={handleLinkedInShareClick}>
            Share on LinkedIn
        </button>
    );
};
