import { useInView } from "react-intersection-observer";
export default function NewsBox() {
  const { ref, inView } = useInView({
    threshold: 0.1, // %10 görünürlükte animasyonu başlat
    triggerOnce: true, // Animasyonu sadece bir kez tetikleyin
  });

  return (
    <div
      className={`
    w-60 m-[20px] bg-[#e3f2fd] rounded-[4px] transition-all duration-1000 ease-in-out flex flex-wrap
    hover:scale-110 
    ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"}
  `}
      ref={ref}
    >
      <div className="w-full h-[200px] overflow-hidden rounded-t-[4px]">
        <img
          src="/assets/1.photo.jpg"
          alt="hata"
          className="w-full h-[inherit] rounded-t-[4px] transition-transform duration-500 hover:scale-[1.3]"
        />
      </div>
      <div className="p-5 text-[#007bff]">
        <h3>duyrunun basligi burada yazilir databaseten gelmesi lazim</h3>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          repellat eligendi accusantium consequuntur voluptatibus aut
          consectetur! Quisquam consectetur dolor ad reprehenderit adipisci?
          Iusto, numquam at sed molestiae ducimus doloremque praesentium!
        </p>
      </div>
    </div>
  );
}
