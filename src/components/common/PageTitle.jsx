import Breadcrumb from "./Breadcrumb";

export default function PageTitle({ title, description, crumbs }) {
  return (
    <div className="bg-primary-800 text-white">
      <div className="container-page py-10 sm:py-12">
        {crumbs && <Breadcrumb crumbs={crumbs} />}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">{title}</h1>
        {description && (
          <p className="text-primary-100/90 mt-2 max-w-2xl text-sm sm:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
