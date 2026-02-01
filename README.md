#fronted:
cd frontend
npm install
npm run dev

#backend
cd backend
py -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload
