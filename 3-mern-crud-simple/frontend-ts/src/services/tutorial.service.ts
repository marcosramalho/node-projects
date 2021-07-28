import http from "../http-common";
import ITutorial from "../types/ITutorial";

class TutorialService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id: string) {
    return http.get(`/tutorials/${id}`);
  }

  create(data: ITutorial) {
    return http.post("/tutorials", data);
  }

  update(data: ITutorial, id: string) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete("/tutorials");
  }

  findByTitle(title: string) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialService();
