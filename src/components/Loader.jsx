import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex items-center justify-center">
        <div
          className="w-20 h-20 border-2 border-opacity-20
       border-blue-500 border-t-blue-500 rounded-full animate-spin"
        />
      </div>
    </Html>
  );
};

export default Loader;

/*
# <div/> - Self closing div act as a spinner
# if it is not 3D but need to convert it to 3D for that react drei is required. It is an
addition to the react-three-fiber
*/
