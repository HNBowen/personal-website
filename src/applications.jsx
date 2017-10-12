import React from 'react'

const Applications = () => {
  return (
      <div className="applications-container">
        <h4 className="applications-header">Applications</h4>
        <h5 className="brainstorm-header">brainstorm</h5>
          <div className="brainstorm-body">
            <p className="brainstorm-about">
              brainstorm is a collaborative brainstorming tool designed to help teams develop ideas with a visually iterative process.
              <br/>
              <br/>
              Built using React, Redux, Express, MongoDB, and d3.
            </p>
            <div className="brainstorm-buttons-container">
              <a className="github-button" href="https://github.com/conundrum-inc/brainstorm/fork" data-icon="octicon-repo-forked" aria-label="Fork conundrum-inc/brainstorm on GitHub">Fork</a>
            </div>
          </div>
        <div>Share My Kitchen</div>
      </div>
    )
}

export default Applications