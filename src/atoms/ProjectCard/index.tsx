import React from 'react'
import MoreHorizontal from '../vectors/MoreHorizontal'
import './cardStyles.scss'

type CardProps = {
  bgGreen?: boolean,
  title?: string,
  description?: string,
  images?: Array<string>
  total: number;
  completed: number;
}

const ProjectCard = ({
  bgGreen,
  title,
  description,
  images = [],
  total,
  completed,
}: CardProps) => {
  
  return (
    <div className={`card-cont   
      ${bgGreen 
      ? 'bg-cvGreen100' 
      : 'bg-white boder-style'}`}
    >
      <div className='title-cont'>
        <h2 className={`
          ${bgGreen 
            ? 'green-card-title' 
            : 'white-card-title'}`}
        >
          {title}
        </h2>
        <MoreHorizontal color={`
          ${bgGreen ? 'white' : '#475569'}`}
        />
      </div>
      <p className={`   
        ${bgGreen 
        ? 'text-greyScale200' 
        : 'text-greyScale600'}`}
      >
        {description}
      </p>
      <div className='user-progress-cont'>
        <div className='img-cont'>
          {images.map((img, indx) => (
            <div key={`img-key-${indx}`} className='user-img'>
              <img src={img} alt='user'/>
            </div>
          ))}
        </div>
        <div className=' w-1/2 items-center'>
          <div className={`progress-bar-title   
            ${bgGreen 
            ? 'text-white' 
            : 'text-darkBlue-300'}`}
          >
            <span>
              {completed}{total}
            </span>
          </div>
          
         

        </div>
      </div>
     
    </div>
  )
}

export default ProjectCard