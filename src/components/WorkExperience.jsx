export const WorkExperience = function (prop) {
  return (
    <>
      <h3>+{prop.data.title}</h3>
      <p>
        {prop.data.period}
      </p>
      <p>
        <i>
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.184L11.056 0.112L12 1.056L4 9.056L0.288 5.344L1.216 4.4L4 7.184Z" fill="black"/>
          </svg>
        </i>
        {prop.data.details}
      </p>
      <h3>
        Keywords:
      </h3>
      <p>
        {prop.data.keywords}
      </p>
    </>
  )
}
