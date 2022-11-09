import useFirestore from "../../hooks/useFirestore";

interface postsProps {
  id:number;
  content:string;
}
function RecentPost() {
  const recentposts = useFirestore("recentposts");

  return (
    <div className="lg:w-[1180px] lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-0">
      <div>
        <h3 className="lg:text-3xl py-10">Get Direction</h3>
        <iframe
          loading="lazy"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14896.32677401517!2d105.8485165!3d21.029417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1030b1c16dba97c9!2sDuong%20Restaurant%20Ngo%20Huyen%20-%20Hanoi%20Restaurants%20%26%20Cooking%20Class!5e0!3m2!1svi!2s!4v1584972633694!5m2!1svi!2s"
          width="100%"
          height="350"
        ></iframe>
      </div>
      <div>
        <h3 className="lg:text-3xl py-10">Recent Post</h3>
        <ol style={{ listStyleType: "upper-roman" }} 
          className="underline block p-10">
            {recentposts && recentposts.map((item: postsProps) => (
              <li key={item.id} className="relative text-base after:absolute after:block after:border-black after:border-b-2 after:border-dashed">
                <a href="#">{item.content}</a>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default RecentPost;
