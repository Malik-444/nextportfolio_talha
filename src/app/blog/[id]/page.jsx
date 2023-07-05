import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet esse ullam consequuntur amet quibusdam, expedita unde labore consectetur assumenda odio.</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="men"
              className={styles.avatar}
              width={40}
              height={40}
            ></Image>
            <span className={styles.username}>JazZy Bhai</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="hacking"
            fill={true}
            className={styles.image}
          ></Image>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          <b>Introduction: </b> <br /> Hacking is a term that often evokes a
          sense of fear and intrigue. It,s a word associated with illegal
          activities and breaches of privacy. However, there is another side to
          hacking, one that promotes ethical practices and protects against
          malicious attacks. In this blog post, we will explore the world of
          ethical hacking, shedding light on its purpose, techniques, and
          significance in the realm of cybersecurity. <br />
          <br />
          <b> 1)Defining Ethical Hacking:</b> <br /> Ethical hacking, also known
          as white-hat hacking, involves the authorized exploration of systems
          and networks to identify vulnerabilities. Ethical hackers, armed with
          technical skills and knowledge, use their expertise to find weaknesses
          before malicious actors can exploit them. Their aim is to enhance
          security, protect sensitive information, and assist organizations in
          strengthening their defenses. <br />
          <br />
          <b> 2)The Importance of Ethical Hacking:</b> <br /> In a rapidly
          evolving digital landscape, the need for robust cybersecurity measures
          is paramount. Ethical hacking plays a crucial role in this regard. By
          proactively identifying vulnerabilities, ethical hackers help
          organizations identify and rectify potential weaknesses before they
          are exploited by cybercriminals. This proactive approach mitigates
          risks, safeguards data, and ensures the integrity of systems. <br />
          <br />
          <b> 3)Techniques Used in Ethical Hacking: </b>
          <br /> Ethical hackers utilize a range of techniques to uncover
          vulnerabilities and assess the security posture of systems. These
          techniques may include network scanning, penetration testing, social
          engineering, vulnerability scanning, and code analysis. By employing
          these methods, ethical hackers simulate real-world attack scenarios,
          allowing organizations to understand their weaknesses and implement
          appropriate countermeasures. <br />
          <br />
          <b> 4)The Ethical Hackers Code: </b>
          <br /> Ethical hacking operates within a set of ethical guidelines.
          Ethical hackers adhere to strict codes of conduct, ensuring that their
          actions are legal, authorized, and focused solely on improving
          security. They work hand in hand with organizations, maintaining
          transparency and integrity throughout the process. This responsible
          approach distinguishes ethical hackers from malicious actors,
          establishing a foundation of trust and collaboration. <br />
          <br />
          <b> 5)Pursuing a Career in Ethical Hacking:</b> <br /> The field of
          ethical hacking presents exciting opportunities for individuals
          interested in cybersecurity. With the ever-increasing demand for
          skilled professionals, pursuing a career in ethical hacking can lead
          to rewarding and fulfilling work. Acquiring relevant certifications,
          continuous learning, and staying updated on the latest hacking
          techniques are essential steps towards becoming a proficient ethical
          hacker. <br /> <br /> <b>Conclusion:</b> <br /> Ethical hacking is a
          powerful tool in the fight against cyber threats. It empowers
          organizations to fortify their defenses, secure valuable data, and
          maintain trust with their stakeholders. By understanding the world of
          ethical hacking, we can appreciate its importance in ensuring a safer
          digital environment. Let,s embrace the concept of ethical hacking and
          work together towards a more secure and resilient future.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
