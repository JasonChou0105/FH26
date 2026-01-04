import RecapTextbox from "./RecapTextbox";
import { useHorizontalScroll } from "../../../../hooks/useHorizontalScroll";
import { useThree } from '@react-three/fiber';

function RecapText() {
  const { horizontalOffset } = useHorizontalScroll(false);
  const { viewport } = useThree();
  const text1 = `Build things that actually work. Things you understand end to end. This site is a place to experiment, learn, and ship ideas without shortcuts. Every detail is intentional, and every project exists to get better at the craft.`;

  const text2 = `Create lasting memories by building together. A hackathon isn’t just about the final project, but the late nights, small wins, and shared problem-solving along the way. You come to learn, collaborate, and try ideas that might not work at first. Those moments, and the people you build them with, are what stay with you long after the event ends.`

  // Convert 3D units to CSS pixels (adjust multiplier as needed)
  const translateX = horizontalOffset * viewport.factor / 2.2;

  return (
    <div
      className="flex items-center justify-center min-h-screen w-1/2"
      style={{ transform: `translateY(-${200}px) translateX(${translateX}px)` }}
    >
      {/* Textbox 1 - on the left */}
      <div
        className="relative z-10"
        style={{ transform: `translateX(${translateX * 0.1}px)` }}
      >
        <RecapTextbox translateX={20} title="Build something to be proud of">
          {text1}
        </RecapTextbox>
      </div>

      {/* Image - to the right, overlapping textbox 1, staggered down */}
      <div
        className="relative z-0"
        style={{ transform: `translateY(80px) translateX(40px)` }}
      >
        <img
          src="/images/photobooth.jpg"
          alt="Hackathon"
          className="h-48 w-auto md:h-64 md:w-auto lg:h-80 object-cover rounded-lg shadow-2xl"
          style={{
            boxShadow:
              "0 0 20px rgba(120, 192, 255, 0.2), 0 0 40px rgba(186, 180, 255, 0.15)",
          }}
        />
      </div>

      {/* Textbox 2 - to the left of image, overlapping the image */}
      <div
        className="relative z-30"
        style={{ transform: `translateX(${translateX * 0.1}px)` }}
      >
        <RecapTextbox translateX={0} title="Create lasting memories">
          {text2}
        </RecapTextbox>
      </div>

      <div
        className="relative z-0 hidden md:block"
        style={{ transform: `translateY(-80px) translateX(-20px)` }}
      >
        <img
          src="/images/FH24_1.jpeg"
          alt="Hackathon"
          className="w-48 h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 object-cover rounded-lg shadow-2xl"
          style={{
            boxShadow:
              "0 0 20px rgba(120, 192, 255, 0.2), 0 0 40px rgba(186, 180, 255, 0.15)",
          }}
        />
      </div>
    </div>
  );
}

export default RecapText;
