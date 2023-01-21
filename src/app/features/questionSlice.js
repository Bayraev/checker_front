import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [{card: {question: "question", answer: "answer", category: "hard", see: true}}, {card: {question: "question", answer: "answer", category: "normal", see: true}}],
    loading: false,
    error: null,

}

export const addQuestion = createAsyncThunk(
    "questions/post",
    async ({card, category, see, tags, image}, thunkAPI) => {
        // we dont use tags or images yet
        console.log(card, category, tags, image);
        try {
            const res = await fetch("http://localhost:4000/question", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({card, category, see, tags, image})
            })

            const json = await res.json()

            if (json.error) {
                return thunkAPI.rejectWithValue(json.error)
            }

            return thunkAPI.fulfillWithValue(json)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
    
)

export const getQuestions = createAsyncThunk(
    "questions/get",
    async (_, thunkAPI) => {
        try {
            const res = await fetch("http://localhost:4000/questions")
            const json = await res.json()
            return thunkAPI.rejectWithValue(json)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)



// S L I C E 
const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addQuestion.pending, (state, action) => {
                state.loading = true
                state.error = false
                console.log(action);
            })
            .addCase(addQuestion.fulfilled, (state, action) => {
                state.questions.push(action.payload)
                state.loading = false
                state.error = false
                console.log(action);
            })
            .addCase(addQuestion.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
                console.log(action);
            })



            .addCase(getQuestions.pending, (state, action) => {
                state.loading = true
                state.error = false
                console.log(action);
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                state.questions.push(action.payload)
                state.loading = false
                state.error = false
                console.log(action);
            })
            .addCase(getQuestions.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
                console.log(action);
            })
            
    }
})

export default questionSlice.reducer;