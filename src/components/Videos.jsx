import React from "react";

const Videos = ({ courses }) => {
  console.log(courses);
  return (
    <>
      <h2 className="p-4 border-y">Video Series (8)</h2>
      <div className="w-full h-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4">
        {courses &&
          courses.map((elem, i) => {
            return (
              <>
                <div
                  key={elem.id}
                  className="flex flex-col justify-center border-y hover:bg-slate-100 hover:cursor-pointer rounded-lg"
                >
                  <span className="w-[60px] my-2 py-1 text-white text-center bg-slate-400 border-l border-y rounded-lg">
                    part {i + 1}
                  </span>
                  <h2>{elem.title}</h2>
                  <h3>{elem.subtitle}</h3>
                  <p>{elem.courseHours} घंटा</p>
                  <span>
                    Contriution: {elem.amount}{" "}
                    <span className="line-through">{elem.originalAmount}</span>
                  </span>
                  <span className="w-8 text-center text-sm bg-blue-200 text-gray-800 rounded-md px-1 py-1">
                    हिंदी
                  </span>
                  <span className="text-orange-400 text-sm hover:text-orange-800">
                    कार्ट मे जोडे | एनरोल करे
                  </span>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Videos;
