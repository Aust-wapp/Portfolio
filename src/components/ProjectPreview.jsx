export function ProjectPreview({ title, image, featured = false }) {
  return (
    <div className={`project-preview ${featured ? 'project-preview--featured' : ''}`}>
      {image ? (
        <img src={image} alt={`${title} screenshot`} />
      ) : (
        <div className={'project-preview__placeholder'} role={'img'} aria-label={`${title} screenshot placeholder`}>
          <span className={'project-preview__monogram'} aria-hidden={'true'}>{title.slice(0, 2).toUpperCase()}</span>
          <span className={'project-preview__caption'}>Project screenshot</span>
          <span className={'project-preview__note'}>Preview coming soon</span>
        </div>
      )}
    </div>
  )
}
