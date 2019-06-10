import React from "react"
import { Link, RichText } from "prismic-reactjs"
import { linkResolver } from "../../utils/linkResolver"
import htmlSerializer from "../../utils/htmlSerializer"

const FileListTitle = ({ slice }) => {
  if (slice.primary.section_title) {
    return (
      <div className="file-list__title">
        {RichText.render(slice.primary.section_title, linkResolver, htmlSerializer)}
      </div>
    )
  }
  return null;
}

const FileListItem = ({ file }) => {
  const fileUrl = file.media_file ? Link.url(file.media_file) : '/';
  const fileName = file.file_name ? file.file_name : 'N/A';
  return <li className="file-list__file">
    <a className="file-list__link" href={fileUrl}>{fileName}</a>
  </li>

}

const FileListGroup = ({ slice }) => {
  if (slice.fields) {
    return (
      <ul className="file-list__group">
        {slice.fields.map((file, index) => <FileListItem file={file} index={index} key={ index }/>)}
      </ul>
    )
  }
  return null;
}

export default ({ slice }) => {
  return (
    <div className="file-list container">
      <FileListTitle slice={ slice }/>
      <FileListGroup slice={ slice }/>
    </div>
  )
}
