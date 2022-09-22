import { useState } from "react";

import { marked } from "marked";
import "./App.css";

import placeHolder from "./data";

export default function App() {
  const [markdown, setMarkdown] = useState(placeHolder);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <h1 className="main--title">Markdown Previewer</h1>
      <div className="container">
        <section>
          <h4 className="subtitle">Markdown Input</h4>
          <div className="mark-input">
            <textarea
              className="inputStyle"
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder={placeHolder}
              id="editor"
            ></textarea>
          </div>
        </section>

        <section>
          <h4 className="subtitle">Preview</h4>

          <article
            className="outputStyle inputStyle"
            dangerouslySetInnerHTML={{
              __html: marked(markdown),
            }}
            id="preview"
          ></article>
        </section>
      </div>
    </div>
  );
}
