import React from "react"
import "./Compentencies.css"

const Competencies = () => {
  return (
    <div>
      {/* 55C */}
      <header>
        {/* 54J 54F-1 */}
        <h1 className="heading-title">My Page Baby!</h1>
        <div className="navbar">
          {/* 59C */}
          <nav role="navigation"><a target="_blank" rel="noopener noreferrer" href="https://www.google.com">Here</a></nav>
          <nav role="navigation"><a target="_blank" rel="noopener noreferrer" href="https://www.google.com">There</a></nav>
          <nav role="navigation">Everywhere</nav>
        </div>

      </header>

      <div className="box-container">
        <div className="box-blue"></div>
        <div className="box-orange"></div>
      </div>

      <section>
        <div className="animation"></div>
      </section>


      <div className="box-model">Box Model</div>

      {/* 54C-3 */}
      <div className="greeting">
        {/* 54C-1 */}
        <p>Hello!</p>
        {/* 54C-2 */}
        <span>Go Home!</span>
      </div>

      {/* 54G */}
      <br />

      {/* 54D-1 */}
      <article>
        <h2>Blog post 2</h2>
        {/* 54D-2 */}
        <section>
          <h3>Chapter 1: When I was young I did these things</h3>
          <ul>
            {/* 54E-1 */}
            <li>Sleep</li>
            <li>Eat</li>
            <li>Sleep</li>
          </ul>
        </section>
      </article>



      {/* 55D */}
      <customElement>
        {/* 54F-2 */}
        <h2>This is wrapped in my custom element</h2>
      </customElement>

      <div id="cat-fight">
        {/* 54E-2 */}
        <img src="https://cdn10.bigcommerce.com/s-3tqgz/template/images/article/how_to_break_up_cat_fights.jpg" alt="cat fight" />
        <img src="https://cdn10.bigcommerce.com/s-3tqgz/template/images/article/how_to_break_up_cat_fights.jpg" alt="cat fight" />
        <img src="https://cdn10.bigcommerce.com/s-3tqgz/template/images/article/how_to_break_up_cat_fights.jpg" alt="cat fight" />
      </div>


      {/* --- Addt'l Comps --- */}

      <div className="audio-video">
        {/* 56C */}
        <video controls width="250">
          <source src="/videos/Flower - 4766.mp4" type="video/mp4" />
        </video>

        {/* 56D */}
        <audio controls>
          <source src="http://www.noiseaddicts.com/samples_1w72b820/2514.mp3" />
        </audio>
      </div>

      <br />

      <div className="transition-box" ></div>

      <div className="flex-boxes">
        <div className="box 1">1</div>
        <div className="box 2">2</div>
        <div className="box 3">3</div>
        <div className="box 4">4</div>
        <div className="box 5">5</div>
      </div>

      <br />

      <div class="plus-container">
        <p>First</p>
        <div>This is a child of the 'First'</div>
        <p>Second</p>
        <p>Third</p>
      </div>

      <br />

      <div className="font-awesome">
        <h3>Font-Awesome</h3>
        <i className="fas fa-air-freshener fa-3x"></i>
      </div>


      {/* 54D-3 */}
      <footer>
        <h3>This is my footer</h3>

      </footer>

    </div>
  )
}

export default Competencies
