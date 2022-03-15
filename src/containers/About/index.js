import React from "react";

/**
 * @author
 * @function About
 **/

const About = (props) => {
  return (
    <>
      <h3>About</h3>
      <div className="blog-post-text">
        {" "}
        The Marecchia (named after the Italian river adjacent to the Rubicon) is
        a grassroots journalism initiative founded in Saint Paul by two
        concerned citizens, with a deep appreciation for the{" "}
        <a
          href="https://www.eff.org/deeplinks/2021/01/political-satire-protected-speech-even-if-you-dont-get-joke"
          target="_blank"
        >
          first amendment
        </a>
        .
      </div>
      <div className="blog-post-text">
        "What a waste it is to lose one's mind. Or not to have a mind is being
        very wasteful. How true that is.”
      </div>
      <div className="blog-post-text">
        The Marecchia was founded off this one simple principle, presented by
        former Vice President Dan Quayle in 1989. The mind is the most powerful
        tool known to man, and we feel that our upmost responsibility is to put
        it to good use. How true that is.
      </div>
      <div className="blog-post-text">
        People often ask us about our reputability to which we respond: just
        trust us.
      </div>
      <div className="blog-post-text">
        We welcome submissions from the community, the Marecchia can be reached
        at <a href="mailto:themarecchia@gmail.com">themarecchia@gmail.com</a>{" "}
      </div>
      <div className="blog-post-text">
        <a class="disclaimer" href="/#/disclaimer">
          DISCLAIMER
        </a>
      </div>
    </>
  );
};

export default About;
