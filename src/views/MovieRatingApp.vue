<script setup>
import { items } from '../movies.json'
import { ref, computed } from 'vue'
import { StarIcon } from '@heroicons/vue/24/solid'
import { useTheme } from 'vuetify'

const theme = useTheme()

const movies = ref(items)
function updateRating(movieIndex, rating) {
  movies.value[movieIndex].rating = rating
}

const showForm = ref(false)

const editMode = ref(false)
let currentIndex = -1

const toggleForm = () => {
  showForm.value = !showForm.value
  if (!showForm.value) clearForm()
}

const newMovie = ref({
  id: movies.value.length + 1,
  name: '',
  description: '',
  image: '',
  rating: '',
  genres: [],
  inTheaters: false
})

const clearForm = () => {
  newMovie.value = {
    id: '',
    name: '',
    description: '',
    image: '',
    rating: '',
    genres: [],
    inTheaters: false
  }
  editMode.value = false
  currentIndex = -1
  closeForm()
}

const addMovie = () => {
  // Validate the form fields
  if (
    !newMovie.value.name ||
    !newMovie.value.description ||
    !newMovie.value.image ||
    !newMovie.value.genres ||
    !newMovie.value.rating
  ) {
    alert('Please fill in all fields.')
    return
  }

  const genreInput = ref('')

  const genresToAdd = newMovie.value.genres.split(',').map((genre) => genre.trim())
  // newMovie.value.genres = genresToAdd;

  if (editMode.value) {
    movies.value[currentIndex] = { ...newMovie.value }
  }
  // Push the new movie object to the movies array
  movies.value.push({
    id: newMovie.value.id,
    name: newMovie.value.name,
    description: newMovie.value.description,
    image: newMovie.value.image,
    rating: parseInt(newMovie.value.rating), // Convert rating to integer
    genres: genresToAdd, // Copy genres array
    inTheaters: newMovie.value.inTheaters
  })

  clearForm()
}

const editMovie = (index) => {
  currentIndex = index
  showForm.value = true
  newMovie.value = { ...movies.value[index] }
  editMode.value = true
}

const deleteMovie = (index) => {
  movies.value.splice(index, 1)
}

const averageRating = computed(() => {
  if (movies.value.length === 0) {
    return 0
  }

  const totalRating = movies.value.reduce((sum, movie) => sum + movie.rating, 0)
  return (totalRating / movies.value.length).toFixed(2) // .toFixed(2) for 2 decimal places
})

const resetRatings = () => {
  movies.value.forEach((movie) => {
    movie.rating = 0
  })
}

const closeForm = () => {
  showForm.value = false
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-sheet>
          <div class="container">
            <div class="w-full text-center">
              <h1 class="font-poppins text-3xl mb-2 mt-0">Movie Ratings</h1>
            </div>

            <div class="flex items-center w-full mb-5">
              <button style="margin-right: 10px" class="btn" @click="toggleForm">Add movie</button>
              <v-spacer></v-spacer>
              <button
                style="margin-left: auto; margin-right: 10px"
                class="btn"
                @click="resetRatings"
              >
                Reset ratings
              </button>
            </div>
            <div
              :class="[theme.global.current.value.dark ? 'bg-dark' : 'bg-light', 'modal-overlay']"
              @click="closeForm"
              v-show="showForm"
            >
              <div class="modal-content" @click.stop>
                <form @submit.prevent="addMovie">
                  <label for="name">Name:</label>
                  <input type="text" id="name" v-model="newMovie.name" required />
                  <label for="description">Description</label>
                  <input type="text" id="description" v-model="newMovie.description" />
                  <label for="image">Image</label>
                  <input type="text" id="image" v-model="newMovie.image" />
                  <label for="rating">rating</label>
                  <input type="text" id="rating" v-model="newMovie.rating" />
                  <label for="genres">Genres:</label>
                  <input
                    type="text"
                    id="genres"
                    v-model="newMovie.genres"
                    placeholder="Enter genres separated by commas"
                    class="mb-3"
                  />

                  <input
                    type="checkbox"
                    id="checkbox"
                    v-model="newMovie.inTheaters"
                    true-value="yes"
                    false-value="no"
                    class="!inline-block mr-2"
                  />
                  <label for="checkbox" class="!inline-block">in theaters</label>
                  <v-divider></v-divider>
                  <button class="btn mt-10" type="button" @click="clearForm">Cancel</button>
                  <button class="btn" type="submit">
                    {{ editMode ? 'Update Movie' : 'Add movie' }}
                  </button>
                </form>
              </div>
            </div>
            <div class="container flex flex-wrap">
              <div
                v-for="(movie, movieIndex) in movies"
                :key="movie.id"
                class="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
              >
                <div class="rating-wrapper">
                  <img :src="movie.image" :alt="movie.name" />
                  <StarIcon
                    :class="movie.rating ? 'text-yellow-500' : 'text-gray-500'"
                    class="w-9 h-9 rating-star"
                  />
                  <span class="rating-number">{{ movie.rating ? movie.rating : '-' }}</span>
                </div>
                <div class="p-2">
                  <h2 class="font-poppins text-xl mb-2 text-black dark:text-white">
                    {{ movie.name }}
                  </h2>
                  <button
                    class="inline-block bg-blue-500 text-white px-3 py-1 mr-1 rounded-full"
                    v-for="genre in movie.genres"
                    :key="genre"
                  >
                    {{ genre }}
                  </button>
                  <p class="mt-2 text-black dark:text-white">{{ movie.description }}</p>
                  <p class="mt-2 text-black dark:text-white">Rating ({{ movie.rating }}/5)
                  <div>
                    <button
                      v-for="star in 5"
                      :key="star"
                      :class="
                        star <= movie.rating ? 'text-yellow-500' : 'text-gray-500'
                      "
                      :disabled="star === movie.rating"
                      @click="updateRating(movieIndex, star)"
                    >
                      <StarIcon class="w-6 h-6 inline" />
                    </button>
                  </div>
                </p>
                </div>
                <div class="footer">
                  <button class="btn" @click="editMovie(movieIndex)">Edit</button>
                  <button class="btn" @click="deleteMovie(movieIndex)">Delete</button>
                </div>
              </div>
            </div>
            <!-- <span>Total Movies: {{ movies.length }}</span> /
              <span> Average Rating: {{ averageRating }}</span> -->
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; /* Align items to the top */
  justify-content: space-between;
}
label,
input {
  display: block;
}
input {
  border: 1px solid #333;
  border-radius: 2px;
}
.bg-dark {
  background-color: #333333; /* Dark mode background color */
}

.bg-light {
  background-color: #f0f0f0; /* Light mode background color */
}
.modal {
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
}
.modal-content {
  /* background-color: black; */
  border-radius: 8px;
  padding: 20px;
  min-width: 40%;
  max-width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.button-wrapper {
  width: 100%;
}
.rating-wrapper {
  position: relative;
}
.rating-star {
  position: absolute;
  top: 5px;
  right: 2px;
}
.rating-number {
  position: absolute;
  top: 11px;
  right: 16px;
  /* color: white; */
}
.inline {
  display: inline-block;
}
.card {
  border-radius: 8px;
  background-color: white;
  display: inline-block;
  margin: 10px;

  box-shadow:
    0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
    0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
    0px 1px 3px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
h1 {
  font-weight: bold;
}
.btn {
  background-color: blue;
  color: white;
  border-radius: 4px;
  margin: 4px;
  padding: 4px;
}
</style>
