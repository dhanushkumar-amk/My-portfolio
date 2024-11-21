import { useState } from "react";


const WorkItem = ({ item }) => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <div
      className='work__card'
      key={item.id}>
      <img
        src={item.image}
        alt=''
        className='work__img'
      />
      <h3 className='work__title'>{item.title}</h3>
      {/* <a
        href={item.link}
        className='work__button'
        target='_blank'>
        Demo <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a> */}
      <a
        // href={item.source}
        className='work__button button__work'
        target='_blank'
        onClick={() => toggleTab(1)}
        >
        View more<i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>

     <div
              className={
                toggleState === 1
                  ? 'portfolio__model active-model'
                  : 'portfolio__model'
              }>
              <div className='portfolio__model-content'>
                <i
                  onClick={() => toggleTab(0)}
                  className='uil uil-times portfolio__model-close'></i>
                    <div className="rightSide-popup">
                    <img
                src={item.image}
                alt=''
                className='work__images'
                />
                </div>
                <div>
                <h3 className='portfolio__model-title'>{item.title}</h3>
                <p className='portfolio__model-description'>
                {item.description}.
                </p>
                <ul className='portfolio__model-service'>
                  <li className='portfolio__model-service'>
                    <i className='uil uil-check-circle portfolio__model-icon'></i>

                    <p className='portfolio__model-info'>
                     Tech Stack -  {item.techStack}
                    </p>
                  </li>
                  <li className='portfolio__model-service'>
                    <i className='uil uil-check-circle portfolio__model-icon'></i>

                    <p className='portfolio__model-info'>
                      Web page development.
                    </p>
                  </li>
                  <li className='portfolio__model-service'>
                    <i className='uil uil-check-circle portfolio__model-icon'></i>

                    <p className='portfolio__model-info'>
                      I create ux element interactions.
                    </p>
                  </li>
                  <li className='portfolio__model-service'>
                    <i className='uil uil-check-circle portfolio__model-icon'></i>

                    <p className='portfolio__model-info'>
                      I position your company brand.
                    </p>
                  </li>
                  <li className='portfolio__model-service'>
                    <i className='uil uil-check-circle portfolio__model-icon'></i>

                    <a href={item.source} className='portfolio__model-info'>
                        Source - To see the code click here
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>


    </div>
  );
};

export default WorkItem;
