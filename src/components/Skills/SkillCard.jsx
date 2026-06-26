export default function SkillCard({
  name,
  image,
}) {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">

      <div className="d-flex justify-content-center">

        <div className="skill-box mb-4">

          <div className="skill-box-img text-center p-5">

            <img
              src={image}
              alt={name}
              width="80"
              height="80"
              className="rounded-4"
            />

          </div>

          <div className="skill-box-content text-center">

            <h3 className="skill-content">
              {name}
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}