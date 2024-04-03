const FormattedDate = ({date}) => (
  <time datetime={date.toISOString()}>
	{
		date.toLocaleDateString('en-us', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		})
	}
</time>

)

export default FormattedDate;