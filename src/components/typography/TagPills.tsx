export const TagPills = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((t) => (
      <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
        {t}
      </span>
    ))}
  </div>
);
