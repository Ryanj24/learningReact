import Option1 from './Option1'
import Option2 from './Option2'

const ResetStateAtSamePos = () => {

  return (
    <section className='border-2 rounded-md p-5'>
        <header className='text-left mb-5'>
            <h2 className='text-2xl font-semibold mb-2'>Reset State at the same Position</h2>
            <ul className='list-disc text-left py-4 px-8 flex flex-col gap-2'>
                <li>
                    It is possible to reset a components state when it maintains its position in the render tree. There are 2 options:
                    <ul className='list-decimal text-left py-4 px-8 flex flex-col gap-2'>
                        <li>Render the component in different positions</li>
                        <li>Give each component a unique key</li>
                    </ul>
                </li>
            </ul>
        </header>
        <div className='flex flex-col lg:flex-row items-center gap-10'>
            <Option1 />
            <Option2 />
        </div>
    </section>
  )
}

export default ResetStateAtSamePos