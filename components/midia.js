export default function Midia() {
  return (
    <div className="px-28 py-8">
      <div>
        <p className="py-8 text-center text-3xl font-bold">
          NA MÍDIA
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8bcc84MWu1c?si=C749BqllAgoj2oT-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div className="">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8oPJymHax-U?si=CWPSI7cqS9Z7ec2W"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}
