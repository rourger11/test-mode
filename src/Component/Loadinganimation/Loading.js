import { RotatingLines } from 'react-loader-spinner';
export default function Loading() {
  return (
    <div style={{ textAlign: "center" }}><RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}

                        /> </div> 
  )
}

