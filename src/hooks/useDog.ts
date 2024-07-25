import { reactive, onMounted } from "vue";
import axios from "axios";

export default function useDog() {
  const dogList: any = reactive([]);

  onMounted(() => {
    getDog();
  });

  async function getDog() {
    try {
      const { data } = await axios("https://dog.ceo/api/breeds/image/random");
      if (data.status && data.status === "success") {
        dogList.push(data.message);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return {
    dogList,
    getDog,
  };
}
