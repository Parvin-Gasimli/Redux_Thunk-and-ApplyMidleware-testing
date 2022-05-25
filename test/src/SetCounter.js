export const SetCounter=()=>{
    return(
        <section>
            <form onSubmit={(event)=>{
                event.preventDefault()
            }}>
                <label htmlFor="set-to">Set Count</label>
                <input id="set-to" type='number' />
                <input type='submit' />

            </form>
        </section>
    )
}