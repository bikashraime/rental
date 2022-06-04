import React from 'react'
import Gallery from 'react-grid-gallery'
import house from './house.jpg'
import b2 from './b2.jpg'
import b3 from './b3.jpg'
import background from './background.jpg'

//Using react-grid-gallery
function Imageviewer() {
  const IMAGES =
    [{
      src: house,
      thumbnail: house,
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
      src: b2,
      thumbnail: b2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: background,
      thumbnail: background,
      thumbnailWidth: 320,
      thumbnailHeight: 212
    },
    {
      src: b2,
      thumbnail: b2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
      caption: "Boats (Jeshu John - designerspics.com)"
    }]

  return (
    <div>
      <Gallery images={IMAGES} />
    </div>
  )
}

export default Imageviewer