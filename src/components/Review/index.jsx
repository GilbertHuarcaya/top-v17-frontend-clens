import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postUserReview } from '../../store/actions';
import useForm from '../../hooks/useForm';

const Review = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let prefilledForm = {};
  if (user) {
    prefilledForm = {
      userId: user.id,
      userName: user.userName,
      userPhoto: 'http.google.com',
      comentario: '',
      rating: '3',
    };
  } else {
    prefilledForm = {};
  }
  const { form, handleChange } = useForm(prefilledForm);
  const handleSubmit = async (e) => {
    e.preventDefault();

    /* loginUser(dispatch, form); */
    postUserReview(dispatch, form);
    navigate('/');
  };
  console.log(form);
  return (
    <div className="review">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label" htmlFor="email">
            Comentario
            <div className="slot">
              <textarea
                className="input-text"
                name="comentario"
                onChange={handleChange}
                required
                type="text"
              />
            </div>
          </label>
        </div>
        <button className="btn btn-primary" id="btn-continue" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
export default Review;
