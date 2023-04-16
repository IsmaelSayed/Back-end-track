defmodule Pop do
  def sort(list) when is_list(list) do
    do_select(list, [])
  end

  def do_select([head|[]], acc) do
    acc ++ [head]
  end
  def do_select(list, acc) do
    min = min(list)
    do_select(:lists.delete(min, list), acc ++ [min])
  end

  defp min([first|[second|[]]]) do
    small(first, second)
  end
  defp min([first|[second|finish]]) do
    min([small(first, second)|finish])
  end

  defp small(p1, p2) do
    if p1 <= p2 do p1 else p2 end
  end
end
IO.inspect ("before")
IO.inspect([14,5,7,9,6,2,4,3,1]) 
IO.inspect ("now")
IO.inspect Pop.sort([14,5,7,9,6,2,4,3,1]) 

///////////////////////////////////////////////////////////

// from higher to lower

defmodule Pop do
  def sort(list) when is_list(list) do
    do_select(list, [])
  end

  def do_select([head|[]], acc) do
    acc ++ [head]
  end
  def do_select(list, acc) do
    min = min(list)
    do_select(:lists.delete(min, list), acc ++ [min])
  end

  defp min([first|[second|[]]]) do
    small(first, second)
  end
  defp min([first|[second|finish]]) do
    min([small(first, second)|finish])
  end

  defp small(p1, p2) do
    if p1 >= p2 do p1 else p2 end
  end
end
IO.inspect ("before")
IO.inspect([2,5,7,9,6,2,4,3,17,1]) 
IO.inspect ("now")
IO.inspect Pop.sort([2,5,7,9,6,2,4,3,17,1]) 