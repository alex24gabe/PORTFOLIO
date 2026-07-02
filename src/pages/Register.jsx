import MainLayout from "@/layouts/MainLayout";

function Register() {

  return (

    <MainLayout>

      <section
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-slate-50
          px-6
          py-32
        "
      >

        <div
          className="
            w-full
            max-w-md
            bg-white
            rounded-3xl
            p-10
            shadow-sm
            border
            border-slate-100
          "
        >

          <h1
            className="
              text-4xl
              font-bold
              text-slate-900
              text-center
            "
          >

            Register

          </h1>

          <p
            className="
              text-slate-600
              text-center
              mt-4
            "
          >

            Create your school portal account.

          </p>

        </div>

      </section>

    </MainLayout>

  );
}

export default Register;