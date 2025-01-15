import { createClient } from "@/utils/supabase/server";
// import { cookies } from "next/headers";

import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {
  // const cookieStore = await cookies();
  // const supabase = createClient(cookieStore);
  const supabase = await createClient();

  const { data: todos } = await supabase.from("todos").select();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>todos:</p>
        <ul>
          {todos?.map((todo, index) => (
            <li key={index}>todo: {todo.name}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}
