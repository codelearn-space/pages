import { useState } from 'react';

export function UploadImage() {
  const [ selectedFile, setSelectedFile ] = useState(null);

  const handleFileInput = (event: any) => {
    setSelectedFile(event.target.files[0])
  }

  const onFileUpload = async (event: any) => {
    event.preventDefault();

    const body = new FormData();
    body.append("file", selectedFile! as Blob);

    const res = await fetch(
      `/upload`,
      {
        method: "POST",
        body
      }
    )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  }

  return (
    <div>
      <form>
        <input
          type="file" name="file"
          onChange={handleFileInput}
        />
        <button onClick={onFileUpload} type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}
