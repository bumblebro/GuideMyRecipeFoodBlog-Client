const templates = [
  <div key={"2"} tw="w-full h-full flex items-center justify-center ">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute h-full "
        style={{ objectPosition: "center", filter: "brightness(0.95)" }}
      />
    )}
    <div tw="flex flex-col items-center bg-white px-8 py-6 rounded-lg shadow-lg border border-gray-200">
      <div tw="flex text-7xl font-extrabold text-black ">{title}</div>
      <div tw="flex text-xl font-medium mt-3 text-gray-800">GuideMyRecipe</div>
    </div>
  </div>,
  <div key={"3"} tw="w-full h-full flex items-center justify-center relative">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute  h-full "
        style={{ objectPosition: "center", filter: "brightness(0.9)" }}
      />
    )}
    <div tw="flex flex-col items-center bg-blue-800 bg-opacity-80 px-10 py-8 rounded-lg shadow-2xl">
      <div tw="flex text-6xl font-bold text-white">{title}</div>
      <div tw="flex text-2xl font-semibold mt-3 text-white">GuideMyRecipe</div>
    </div>
  </div>,
  <div key={"4"} tw="w-full h-full flex relative">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute  h-full "
        style={{ objectPosition: "center" }}
      />
    )}
    <div tw="absolute bottom-0 left-0 w-full flex flex-col">
      <div tw="flex justify-center items-center bg-black px-4 py-2">
        <div tw="flex text-4xl font-bold text-white">{title}</div>
      </div>
      <div tw="flex justify-center items-center bg-gray-900 px-4 py-2">
        <div tw="flex text-2xl font-semibold text-white">GuideMyRecipe</div>
      </div>
    </div>
  </div>,
  <div key={"5"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute bottom-0 left-0 w-full flex flex-col items-center bg-black px-6 py-4"
      style={{ zIndex: 2 }}
    >
      <div tw="flex text-8xl font-bold text-white">{title}</div>
      <div tw="flex text-2xl font-semibold mt-2 text-white">GuideMyRecipe</div>
    </div>
  </div>,
  // <div key={"6"} tw="w-full h-full flex relative overflow-hidden">
  //   {cover && (
  //     <img
  //       src={cover}
  //       alt=""
  //       tw="absolute w-full h-full object-cover inset-0"
  //       style={{ objectPosition: "center" }}
  //     />
  //   )}
  //   <div
  //     tw="absolute left-0 top-0 h-full flex flex-col justify-center items-center"
  //     style={{
  //       width: "40%",
  //       backgroundColor: "#002244",
  //       zIndex: 2,
  //       padding: "1rem",
  //     }}
  //   >
  //     <div tw="flex text-8xl font-bold text-white">{title}</div>
  //     <div tw="flex text-2xl font-semibold mt-2 text-white">GuideMyRecipe</div>
  //   </div>
  // </div>,
  <div key={"7"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div tw="absolute inset-0 flex items-center justify-center">
      <div tw="flex flex-col items-center bg-black bg-opacity-80 px-8 py-4 rounded-lg border border-gray-700">
        <div tw="flex text-8xl font-bold text-white">{title}</div>
        <div tw="flex text-2xl font-semibold mt-2 text-white">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"8"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div tw="absolute top-0 left-0 flex items-start justify-start p-6">
      <div tw="flex flex-col items-start bg-black bg-opacity-70 px-8 py-6 rounded-md border border-gray-700 shadow-lg max-w-3xl">
        <div tw="text-4xl font-bold text-white break-words">{title}</div>
        <div tw="text-xl font-semibold text-white break-words mt-2">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"9"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div tw="absolute inset-0 flex items-center justify-center p-4">
      <div tw="flex flex-col items-center bg-white bg-opacity-90 px-8 py-6 rounded-lg border border-gray-300 shadow-lg max-w-lg">
        <div tw="flex text-5xl font-bold text-black text-center break-words">
          {title}
        </div>
        <div tw="flex text-2xl font-semibold text-black text-center mt-4 break-words">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"10"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div tw="absolute bottom-0 left-0 w-full flex justify-center items-center">
      <div tw="flex flex-col items-center w-full bg-black bg-opacity-90 py-4">
        <div tw="flex text-5xl font-bold text-white text-center break-words">
          {title}
        </div>
        <div tw="flex text-2xl font-semibold text-white text-center mt-2 break-words">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"11"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div tw="absolute top-0 left-0 w-full flex items-center justify-center p-4">
      <div tw="flex flex-col items-center bg-red-600 px-8 py-4 rounded-lg">
        <div tw="flex text-5xl font-bold text-white text-center break-words">
          {title}
        </div>
        <div tw="flex text-2xl font-semibold text-white text-center mt-2 break-words">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"12"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div tw="absolute top-0 left-0 flex flex-col p-8" style={{ zIndex: 2 }}>
      <div tw="flex bg-black bg-opacity-80 px-6 py-4 rounded-md">
        <div tw="flex text-5xl font-bold text-white break-words">{title}</div>
      </div>
      <div tw="flex bg-black bg-opacity-80 px-6 py-2 rounded-md mt-4">
        <div tw="flex text-2xl font-semibold text-white break-words">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"13"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute left-0 top-0 flex items-center justify-center"
      style={{ width: "35%", height: "100%", zIndex: 2 }}
    >
      <div tw="flex flex-col items-center bg-black px-8 py-6 rounded-r-lg">
        <div tw="flex text-5xl font-bold text-white break-words">{title}</div>
        <div tw="flex text-2xl font-semibold text-white break-words mt-2">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"14"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute flex items-center justify-center"
      style={{ top: "20%", right: "10%", zIndex: 2 }}
    >
      <div tw="flex flex-col items-center bg-green-800 px-10 py-6 rounded-xl">
        <div tw="flex text-5xl font-bold text-white break-words">{title}</div>
        <div tw="flex text-2xl font-semibold text-white mt-2 break-words">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"15"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute top-0 left-0 flex items-center justify-center p-6"
      style={{ zIndex: 2 }}
    >
      <div tw="flex flex-col items-start bg-black bg-opacity-80 px-8 py-6 rounded-md transform rotate-[-3deg]">
        <div tw="flex text-5xl font-bold text-white break-words">{title}</div>
        <div tw="flex text-2xl font-semibold text-white mt-2 break-words">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"16"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute bottom-0 left-0 w-full flex justify-center items-center"
      style={{ zIndex: 2 }}
    >
      <div tw="flex flex-col items-center bg-black bg-opacity-80 px-8 py-6 rounded-t-3xl">
        <div tw="flex text-5xl font-bold text-white break-words">{title}</div>
        <div tw="flex text-2xl font-semibold text-white mt-2 break-words">
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"17"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: 2, display: "flex" }}
    >
      <div
        tw="flex flex-col items-center bg-blue-900 px-10 py-8 rounded-lg transform rotate-[-3deg]"
        style={{ display: "flex" }}
      >
        <div
          tw="flex text-5xl font-bold text-white"
          style={{ display: "flex" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-white mt-2"
          style={{ display: "flex" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"18"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: 2, display: "flex" }}
    >
      <div
        tw="flex flex-col items-center bg-gray-800 bg-opacity-80 px-10 py-8 rounded-full border-4 border-white transform rotate-2"
        style={{ display: "flex" }}
      >
        <div
          tw="flex text-5xl font-bold text-white"
          style={{ display: "flex" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-white mt-2"
          style={{ display: "flex" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"19"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute bottom-0 right-0 flex"
      style={{ zIndex: 2, display: "flex" }}
    >
      <div
        tw="flex flex-col items-center bg-gradient-to-r from-green-700 to-blue-700 px-8 py-6 rounded-tl-3xl"
        style={{ display: "flex", maxWidth: "80%" }}
      >
        <div
          tw="flex text-5xl font-bold text-white break-words"
          style={{ display: "flex" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-white mt-2 break-words"
          style={{ display: "flex" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"20"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute top-0 right-0 flex"
      style={{ zIndex: 2, display: "flex" }}
    >
      <div
        tw="flex flex-col items-center bg-black bg-opacity-90 px-8 py-6"
        style={{
          display: "flex",
          transform: "rotate(10deg)",
          margin: "20px",
          maxWidth: "80%",
        }}
      >
        <div
          tw="flex text-5xl font-bold text-white break-words"
          style={{ display: "flex" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-white mt-2 break-words"
          style={{ display: "flex" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"21"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute bottom-0 left-0 flex"
      style={{ zIndex: 2, display: "flex" }}
    >
      <div
        tw="flex flex-col items-center bg-gradient-to-r from-purple-700 to-pink-700 px-8 py-6 rounded-xl"
        style={{ display: "flex", transform: "skewX(-10deg)" }}
      >
        <div
          tw="flex text-5xl font-bold text-white break-words"
          style={{ display: "flex", transform: "skewX(10deg)" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-white mt-2 break-words"
          style={{ display: "flex", transform: "skewX(10deg)" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"22"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: 2, display: "flex" }}
    >
      <div
        tw="flex flex-col items-center bg-white px-8 py-6"
        style={{
          clipPath: "ellipse(70% 50% at 50% 50%)",
          border: "3px solid #002244",
          borderRadius: "50%",
          display: "flex",
        }}
      >
        <div
          tw="flex text-5xl font-bold text-black break-words"
          style={{ display: "flex" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-black mt-2 break-words"
          style={{ display: "flex" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"23"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute top-0 left-0 w-full flex items-center justify-center"
      style={{
        zIndex: 2,
        height: "40%",
        backgroundColor: "rgba(0,0,0,0.7)",
        clipPath: "ellipse(150% 100% at 50% 0%)",
        display: "flex",
      }}
    >
      <div
        tw="flex flex-col items-center px-6 py-4"
        style={{ display: "flex" }}
      >
        <div
          tw="flex text-5xl font-bold text-white break-words"
          style={{ display: "flex" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-white mt-2 break-words"
          style={{ display: "flex" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"24"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div tw="absolute top-4 left-4 flex" style={{ zIndex: 2, display: "flex" }}>
      <div
        tw="flex flex-col items-start bg-black px-6 py-4 rounded-md shadow-md"
        style={{ display: "flex" }}
      >
        <div
          tw="flex text-5xl font-bold text-white break-words"
          style={{ display: "flex" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-white mt-2 break-words"
          style={{ display: "flex" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"25"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: 2, display: "flex" }}
    >
      {/* Diagonal stripe overlay */}
      <div
        tw="w-full"
        style={{
          display: "flex",
          transform: "skewY(-10deg)",
          background: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div
          tw="flex flex-col items-center w-full px-8 py-6"
          style={{ display: "flex", transform: "skewY(10deg)" }}
        >
          <div
            tw="flex text-5xl font-bold text-white break-words"
            style={{ display: "flex" }}
          >
            {title}
          </div>
          <div
            tw="flex text-2xl font-semibold text-white mt-2 break-words"
            style={{ display: "flex" }}
          >
            GuideMyRecipe
          </div>
        </div>
      </div>
    </div>
  </div>,
  <div key={"26"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute inset-0 flex items-center justify-center"
      style={{ zIndex: 2, display: "flex" }}
    >
      <div
        tw="flex flex-col items-center bg-white bg-opacity-30 backdrop-filter backdrop-blur-md px-12 py-8 rounded-xl border border-white border-opacity-20"
        style={{ display: "flex" }}
      >
        <div
          tw="flex text-5xl font-bold text-white"
          style={{ display: "flex" }}
        >
          {title}
        </div>
        <div
          tw="flex text-2xl font-semibold text-white mt-3"
          style={{ display: "flex" }}
        >
          GuideMyRecipe
        </div>
      </div>
    </div>
  </div>,
  <div key={"27"} tw="w-full h-full flex relative overflow-hidden">
    {cover && (
      <img
        src={cover}
        alt=""
        tw="absolute w-full h-full object-cover inset-0"
        style={{ objectPosition: "center" }}
      />
    )}
    <div
      tw="absolute top-8 left-1/2 flex flex-col items-center"
      style={{ zIndex: 2, display: "flex", transform: "translateX(-50%)" }}
    >
      <div
        tw="flex text-5xl font-bold text-white px-8 py-4 bg-blue-900 rounded-lg shadow-lg"
        style={{ display: "flex", transform: "rotate(-5deg)" }}
      >
        {title}
      </div>
      <div
        tw="flex text-2xl font-semibold text-white mt-3 px-6 py-2 bg-blue-900 rounded-lg shadow-lg"
        style={{ display: "flex", transform: "rotate(5deg)" }}
      >
        GuideMyRecipe
      </div>
    </div>
  </div>,
];
