import './style.css';

function PhotoCard({ photo }: any) {
  return (
    <div className="image-card">
      <img alt={photo.author} src={photo.download_url} />
      <p>{photo.author}</p>
    </div>
  );
}

export default PhotoCard;