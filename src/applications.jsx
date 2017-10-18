import React from 'react'

class Applications extends React.Component {

  componentDidMount() {
    // var controller = new ScrollMagic.Controller({
    //   globalSceneOptions: {
    //     triggerHook: 'onLeave'
    //   }
    // });

    // var slides = document.querySelectorAll('div.app-body');
    // var headers = document.querySelectorAll('h5');

    // for (var i = 0; i < slides.length; i++) {
    //   new ScrollMagic.Scene({
    //     triggerElement: slides[i]
    //   })
    //   .setPin(slides[i])
    //   .addTo(controller)

    // }
  }

  render() {

    return (
        <div className="applications-container">
          <h4 className="applications-header">Applications</h4>
          <h5 className="brainstorm-header">brainstorm</h5>
            <div className="app-body brainstorm-body">
              <div className="app-demo brainstorm-demo">
                <img src="src/assets/brainstorm_website.png" className="app-img"></img>
              </div>
              <div className="side-bar">
                <p className="app-about brainstorm-about">
                  brainstorm is a collaborative brainstorming tool designed to help teams develop ideas with a visually iterative process.
                  <br/>
                  <br/>
                  Built using React, Redux, Express, MongoDB, and d3.
                </p>
                
                <a className="github-button app-button" href="https://github.com/conundrum-inc/brainstorm/fork" data-icon="octicon-repo-forked" aria-label="Fork conundrum-inc/brainstorm on GitHub">Fork</a>
                
              </div>
            </div>
          <h5 className="share-my-kitchen-header">sharemykitchen</h5>
            <div className="app-body share-my-kitchen-body">
              <div className="app-demo share-my-kitchen-demo">
                <img className="app-img" src="src/assets/share-my-kitchen_website.png"></img>
              </div>
              <div className="side-bar">
                <p className="app-about share-my-kitchen-about">
                  sharemykitchen is a kitchen sharing app that allows foodies and entertainers to share their kitchen spaces.
                  <br />
                  <br />
                  Built using React, Redux, Express, and MongoDB.
                </p>
                
                <a className="github-button app-button" href="https://github.com/gabesangels/sharemykitchen/fork" data-icon="octicon-repo-forked" aria-label="Fork gabesangles/sharemykitchen on GitHub">Fork</a>
                
              </div>
            </div>
        </div>
      )
  }
}

export default Applications