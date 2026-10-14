
import { useState } from "react";

function Post() {
  const [postType, setPostType] = useState("Question");
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [abstract, setAbstract] = useState("");
  const [articleText, setArticleText] = useState("");
  const [tags, setTags] = useState("");

  function handlePost(event) {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a title.");
      return;
    }

    if (postType === "Question" && problem.trim() === "") {
      alert("Please describe your problem.");
      return;
    }

    if (postType === "Article" && abstract.trim() === "") {
      alert("Please enter an abstract.");
      return;
    }

    if (postType === "Article" && articleText.trim() === "") {
      alert("Please enter the article text.");
      return;
    }

    const tagList = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    if (tagList.length > 3) {
      alert("Please enter no more than 3 tags.");
      return;
    }

    if (tagList.length === 0) {
      alert("Please enter at least one tag.");
      return;
    }

    if (tagList.some((tag) => tag.length > 30)) {
      alert("Each tag must be 30 characters or fewer.");
      return;
    }

    alert("Your " + postType.toLowerCase() +
      " has been submitted successfully!");

    setTitle("");
    setProblem("");
    setAbstract("");
    setArticleText("");
    setTags("");
  }

  return (
    <main className="post-page">
      <form onSubmit={handlePost}>
        <h3 className="post-heading">New Post</h3>

        <div className="post-type">
          <strong>Select Post Type:</strong>

          <label>
            <input
              type="radio"
              name="postType"
              value="Question"
              checked={postType === "Question"}
              onChange={() => setPostType("Question")}
            />
            Question
          </label>

          <label>
            <input
              type="radio"
              name="postType"
              value="Article"
              checked={postType === "Article"}
              onChange={() => setPostType("Article")}
            />
            Article
          </label>
        </div>

        <h3 className="post-heading">
          What do you want to ask or share
        </h3>

        <p className="post-help">
          This section is designed based on the type of the post.
          It could be developed by conditional rendering.
          {postType === "Question" ? (
            <span className="post-red">
              {" "}For a question, the following section would be appeared.
            </span>
          ) : (
            <span className="post-red">
              {" "}For an article, the following section would be appeared.
            </span>
          )}
        </p>

        <div className="post-field">
          <label htmlFor="post-title">Title</label>
          <input
            id="post-title"
            type="text"
            placeholder={
              postType === "Question"
                ? "Start your question with how, what, why, etc."
                : "Enter a descriptive title"
            }
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            maxLength={150}
            required
          />
        </div>

        {postType === "Question" ? (
          <div className="post-field">
            <label htmlFor="problem">Describe your problem</label>
            <textarea
              id="problem"
              className="question-text"
              value={problem}
              onChange={(event) => setProblem(event.target.value)}
              maxLength={5000}
              required
            />
          </div>
        ) : (
          <>
            <div className="post-field">
              <label htmlFor="abstract">Abstract</label>
              <textarea
                id="abstract"
                className="abstract-text"
                placeholder="Enter a 1-paragraph abstract"
                value={abstract}
                onChange={(event) => setAbstract(event.target.value)}
                maxLength={1000}
                required
              />
            </div>

            <div className="post-field">
              <label htmlFor="article-text">Article Text</label>
              <textarea
                id="article-text"
                className="article-text"
                placeholder="Enter your article text"
                value={articleText}
                onChange={(event) => setArticleText(event.target.value)}
                maxLength={10000}
                required
              />
            </div>
          </>
        )}

        <div className="post-field tags-field">
          <label htmlFor="tags">Tags</label>
          <input
            id="tags"
            type="text"
            placeholder="Please add up to 3 tags, separated by commas, e.g., Java"
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            required
          />
        </div>

        <div className="post-submit">
          <button type="submit">Post</button>
        </div>
      </form>
    </main>
  );
}

export default Post;
